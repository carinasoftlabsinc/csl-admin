import { Component, Inject, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'app/admin/blog.service';
import { AuthService } from 'app/authentication/authServices';
import { environment } from 'environments/environment';
import { Subscription } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-project-details',
  templateUrl: './add-project-details.component.html',
  styleUrls: ['./add-project-details.component.scss'],
})
export class AddProjectDetailsComponent {
  config2: AngularEditorConfig;
  public mode = 'add';
  private ID!: string | null;
  private authStatusSub!: Subscription;
  isLoading = false;
  userIsAuthenticated: any;
  imagePreview!: string | ArrayBuffer | null;
  imagePreview1!: string | ArrayBuffer | null;
  imagePreview2!: string | ArrayBuffer | null;
  imagePreview3!: string | ArrayBuffer | null;
  imagePreview4!: string | ArrayBuffer | null;

  headingIconPreview!: string | ArrayBuffer | null;
  overviewImgPreview!: string | ArrayBuffer | null;
  resultImagePreviews: (string | ArrayBuffer)[] = [];
  uiImagePreviews: (string | ArrayBuffer)[] = [];
  techImagePreviews: (string | ArrayBuffer)[] = [];
  imageBaseUrl = environment.imageBaseUrl;
  form!: FormGroup;

  @ViewChild('formDirective') private formDirective!: NgForm;

  constructor(
    private service: BlogService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<AddProjectDetailsComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data_2: any
  ) {
    this.config2 = {
      toolbarPosition: 'top',
      editable: true,
      spellcheck: true,
      height: '20rem',
      minHeight: '5rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
      toolbarHiddenButtons: [['bold']],
      customClasses: [
        { name: 'quote', class: 'quote' },
        { name: 'redText', class: 'redText' },
        { name: 'titleText', class: 'titleText', tag: 'h1' },
      ],
    };
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated: any) => {
        this.isLoading = false;
        this.userIsAuthenticated = isAuthenticated;
      });

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      titleLink: new FormControl(null, Validators.required),
      description: new FormControl(null),
      category: new FormControl(null),
      about_title: new FormControl(null),
      aboutDescription: new FormControl(null),
      content: new FormControl(null),
      solutionContent: new FormControl(null),
      industry: new FormControl(null),
      deliverables: new FormControl(null),
      clientReview: new FormControl(null),
      clientName: new FormControl(null),
      designation: new FormControl(null),
      title_1: new FormControl(null),
      desc_1: new FormControl(null),
      title_2: new FormControl(null),
      desc_2: new FormControl(null),
      title_3: new FormControl(null),
      desc_3: new FormControl(null),
      image: new FormControl(null, Validators.required),
      image_2: new FormControl(null),
      aboutBg: new FormControl(null),
      how_image: new FormControl(null),
      tech: new FormControl(null),
      projectLogo: new FormControl(null, Validators.required),

      headingIcon: new FormControl(null),
      overviewImage: new FormControl(null),
      resultImages: new FormControl(null),
      uiImages: new FormControl(null),
      techImages: new FormControl(null),
      development: new FormArray([]),
      workSteps: new FormArray([]),
      overviewPara: new FormControl(null),
      resultHeading_1: new FormControl(null),
      resultHeading_2: new FormControl(null),
      keyHeading: new FormControl(null),
      keyDescription: new FormControl(null),
      userFlowDescription: new FormControl(null),
    });

    if (this.data_2) {
      this.mode = 'edit';
      this.form.patchValue({
        title: this.data_2.title,
        titleLink: this.data_2.titleLink,
        description: this.data_2.description,
        category: this.data_2.category,
        about_title: this.data_2.about_title,
        aboutDescription: this.data_2.aboutDescription,
        content: this.data_2.content,
        solutionContent: this.data_2.solutionContent,
        industry: this.data_2.industry,
        tech: this.data_2.tech,
        deliverables: this.data_2.deliverables,
        clientReview: this.data_2.clientReview,
        clientName: this.data_2.clientName,
        designation: this.data_2.designation,
        title_1: this.data_2.title_1,
        desc_1: this.data_2.desc_1,
        title_2: this.data_2.title_2,
        desc_2: this.data_2.desc_2,
        title_3: this.data_2.title_3,
        desc_3: this.data_2.desc_3,
        image: this.data_2.image,
        image_2: this.data_2.image_2,
        aboutBg: this.data_2.aboutBg,
        how_image: this.data_2.how_image,
        projectLogo: this.data_2.projectLogo,

        headingIcon: this.data_2.headingIcon,
        overviewImage: this.data_2.overviewImage,
        resultImages: this.data_2.resultImages,
        uiImages: this.data_2.uiImages,
        techImages: this.data_2.techImages,
        overviewPara: this.data_2.overviewPara,
        resultHeading_1: this.data_2.resultHeading_1,
        resultHeading_2: this.data_2.resultHeading_2,
        keyHeading: this.data_2.keyHeading,
        keyDescription: this.data_2.keyDescription,
        userFlowDescription: this.data_2.userFlowDescription,
        // development: this.data_2.development,
        
      });
      if (this.data_2.developement?.length) {
        this.data_2.developement.forEach((dev: any) => {
          (this.form.get('development') as FormArray).push(
            new FormGroup({
              title: new FormControl(dev.title),
              description: new FormControl(dev.description),
            })
          );
        });
      }

      if (this.data_2.workSteps?.length) {
        this.data_2.workSteps.forEach((dev: any) => {
          (this.form.get('workSteps') as FormArray).push(
            new FormGroup({
              title: new FormControl(dev.title),
              description: new FormControl(dev.description),
            })
          );
        });
      }

      this.imagePreview = this.imageBaseUrl + this.data_2.image;
      this.imagePreview1 = this.imageBaseUrl + this.data_2.image_2;
      this.imagePreview2 = this.imageBaseUrl + this.data_2.aboutBg;
      this.imagePreview3 = this.imageBaseUrl + this.data_2.how_image;
      this.imagePreview4 = this.imageBaseUrl + this.data_2.projectLogo;

      this.headingIconPreview = this.imageBaseUrl + this.data_2.headingIcon;
      this.overviewImgPreview = this.imageBaseUrl + this.data_2.overviewImage;

      this.resultImagePreviews = (this.data_2.resultImages ?? []).map((image: string) => this.imageBaseUrl + image);
      this.uiImagePreviews = (this.data_2.uiImages ?? []).map((image: string) => this.imageBaseUrl + image);
      this.techImagePreviews = (this.data_2.techImages ?? []).map((image: string) => this.imageBaseUrl + image);


      this.ID = this.data_2._id;

      this.isLoading = false;
    } else {
      this.mode = 'add';
      this.isLoading = false;
    }
  }

  // get feed(): FormArray {
  //   return this.form.get("feed") as FormArray;
  // }

  // add(): void {
  //   this.feed.push(
  //     new FormControl(null)
  //   );
  // }

  // remove(index: number): void {
  //   this.feed.removeAt(index);
  // }

  get title() {
    return this.form.get('title');
  }

  get titleLink() {
    return this.form.get('titleLink');
  }

  get developmentFormArray(): FormArray {
    return this.form.get('development') as FormArray;
  }
  
  get developmentControls(): FormGroup[] {
    return this.developmentFormArray.controls as FormGroup[];
  }
  
  
  addDev() {
    this.developmentFormArray.push(
      new FormGroup({
        title: new FormControl(null, Validators.required),
        description: new FormControl(null, [Validators.required])
      })
    );
  }
  
  removeDev(index: number) {
    this.developmentFormArray.removeAt(index);
  }


  get workStepsFormArray(): FormArray {
    return this.form.get('workSteps') as FormArray;
  }
  
  get workStepsControls(): FormGroup[] {
    return this.workStepsFormArray.controls as FormGroup[];
  }
  
  
  // addWork() {
  //   this.workStepsFormArray.push(
  //     new FormGroup({
  //       title: new FormControl(null, Validators.required),
  //       description: new FormControl(null, [Validators.required])
  //     })
  //   );
  // }
  
  // removeWork(index: number) {
  //   this.workStepsFormArray.removeAt(index);
  // }

  addWork() {
    if (this.workStepsFormArray.length < 5) {
      this.workStepsFormArray.push(
        new FormGroup({
          title: new FormControl(null, Validators.required),
          description: new FormControl(null, Validators.required)
        })
      );
    }
  }
  
  removeWork(index: number) {
    if (this.workStepsFormArray.length > 5) {
      this.workStepsFormArray.removeAt(index);
    }
  }
  

  onImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.form.patchValue({ image: file });

      const imageControl = this.form.get('image');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.imagePreview = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onClearImage() {
    this.imagePreview = null;
    const imageControl = this.form.get('image');
    if (imageControl) {
      imageControl.setValue(null);
    }
  }

  // image2
  onImagePicked2(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.form.patchValue({ image_2: file });

      const imageControl = this.form.get('image_2');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.imagePreview1 = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onClearImage2() {
    this.imagePreview1 = null;
    const imageControl = this.form.get('image_2');
    if (imageControl) {
      imageControl.setValue(null);
    }
  }

  //
  onImagePicked3(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.form.patchValue({ aboutBg: file });

      const imageControl = this.form.get('aboutBg');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.imagePreview2 = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onClearImage3() {
    this.imagePreview2 = null;
    const imageControl = this.form.get('aboutBg');
    if (imageControl) {
      imageControl.setValue(null);
    }
  }

  //

  onImagePicked4(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.form.patchValue({ projectLogo: file });

      const imageControl = this.form.get('projectLogo');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.imagePreview4 = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onClearImage4() {
    this.imagePreview4 = null;
    const imageControl = this.form.get('projectLogo');
    if (imageControl) {
      imageControl.setValue(null);
    }
  }

  onImagePicked5(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.form.patchValue({ how_image: file });

      const imageControl = this.form.get('how_image');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.imagePreview3 = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onClearImage5() {
    this.imagePreview3 = null;
    const imageControl = this.form.get('how_image');
    if (imageControl) {
      imageControl.setValue(null);
    }
  }

  onHeadingIconPicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.form.patchValue({ headingIcon: file });

      const imageControl = this.form.get('headingIcon');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.headingIconPreview = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onClearHeadingIcon() {
    this.headingIconPreview = null;
    const imageControl = this.form.get('headingIcon');
    if (imageControl) {
      imageControl.setValue(null);
    }
  }

  onOverviewImgPicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.form.patchValue({ overviewImage: file });

      const imageControl = this.form.get('overviewImage');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.overviewImgPreview = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onClearOverviewImg() {
    this.overviewImgPreview = null;
    const imageControl = this.form.get('overviewImage');
    if (imageControl) {
      imageControl.setValue(null);
    }
  }


  onResultImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      const newFiles = Array.from(inputElement.files);
  
      // Get existing files
      const existingFiles = (this.form.get('resultImages')?.value || []) as File[];
      const totalFiles = existingFiles.length + newFiles.length;
  
      // Limit to 10 images
      if (totalFiles > 10) {
        const remaining = 10 - existingFiles.length;
        if (remaining <= 0) {
          alert('You can upload a maximum of 10 images.');
          return;
        }
        newFiles.splice(remaining); // Keep only files that fit in the limit
      }
  
      const updatedFiles = [...existingFiles, ...newFiles];
      this.form.patchValue({ resultImages: updatedFiles });
  
      const newPreviews: string[] = [];
      let loadedCount = 0;
  
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            newPreviews.push(reader.result as string);
            loadedCount++;
  
            if (loadedCount === newFiles.length) {
              this.resultImagePreviews = [
                ...(this.resultImagePreviews || []),
                ...newPreviews,
              ];
            }
          }
        };
        reader.readAsDataURL(file);
      });
  
      const imageControl = this.form.get('resultImages');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }
    }
  }
  

  onRemoveResultImage(index: number) {
    if (this.resultImagePreviews) {
      this.resultImagePreviews.splice(index, 1);
    }
    const files = this.form.get('resultImages')?.value as File[];
    files.splice(index, 1);
    this.form.patchValue({ resultImages: files });

    const imageControl = this.form.get('resultImages');
    if (imageControl) {
      imageControl.updateValueAndValidity();
    }
  }

  onUiImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      const newFiles = Array.from(inputElement.files);
  
      // Get existing files
      const existingFiles = (this.form.get('uiImages')?.value || []) as File[];
      const totalFiles = existingFiles.length + newFiles.length;
  
      // Limit to 10 images
      if (totalFiles > 10) {
        const remaining = 10 - existingFiles.length;
        if (remaining <= 0) {
          alert('You can upload a maximum of 10 images.');
          return;
        }
        newFiles.splice(remaining); // Keep only files that fit in the limit
      }
  
      const updatedFiles = [...existingFiles, ...newFiles];
      this.form.patchValue({ uiImages: updatedFiles });
  
      const newPreviews: string[] = [];
      let loadedCount = 0;
  
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            newPreviews.push(reader.result as string);
            loadedCount++;
  
            if (loadedCount === newFiles.length) {
              this.uiImagePreviews = [
                ...(this.uiImagePreviews || []),
                ...newPreviews,
              ];
            }
          }
        };
        reader.readAsDataURL(file);
      });
  
      const imageControl = this.form.get('uiImages');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }
    }
  }
  

  onRemoveUiImage(index: number) {
    if (this.uiImagePreviews) {
      this.uiImagePreviews.splice(index, 1);
    }
    const files = this.form.get('uiImages')?.value as File[];
    files.splice(index, 1);
    this.form.patchValue({ uiImages: files });

    const imageControl = this.form.get('uiImages');
    if (imageControl) {
      imageControl.updateValueAndValidity();
    }
  }

  onTechImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      const newFiles = Array.from(inputElement.files);
  
      // Get existing files
      const existingFiles = (this.form.get('techImages')?.value || []) as File[];
      const totalFiles = existingFiles.length + newFiles.length;
  
      // Limit to 10 images
      if (totalFiles > 10) {
        const remaining = 10 - existingFiles.length;
        if (remaining <= 0) {
          alert('You can upload a maximum of 10 images.');
          return;
        }
        newFiles.splice(remaining); // Keep only files that fit in the limit
      }
  
      const updatedFiles = [...existingFiles, ...newFiles];
      this.form.patchValue({ techImages: updatedFiles });
  
      const newPreviews: string[] = [];
      let loadedCount = 0;
  
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            newPreviews.push(reader.result as string);
            loadedCount++;
  
            if (loadedCount === newFiles.length) {
              this.techImagePreviews = [
                ...(this.techImagePreviews || []),
                ...newPreviews,
              ];
            }
          }
        };
        reader.readAsDataURL(file);
      });
  
      const imageControl = this.form.get('techImages');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }
    }
  }
  

  onRemoveTechImage(index: number) {
    if (this.techImagePreviews) {
      this.techImagePreviews.splice(index, 1);
    }
    const files = this.form.get('techImages')?.value as File[];
    files.splice(index, 1);
    this.form.patchValue({ techImages: files });

    const imageControl = this.form.get('techImages');
    if (imageControl) {
      imageControl.updateValueAndValidity();
    }
  }


  private showSuccessMessage(message: string) {
    const snackBarRef = this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snackbar-success',
    });

    snackBarRef.afterDismissed().subscribe(() => {});
  }

  private showErrorMessage(message: string) {
    const snackBarRef = this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snackbar-danger',
    });

    snackBarRef.afterDismissed().subscribe(() => {});
  }

  onSave() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    // Explicitly map feed items to avoid them being serialized as strings
    const formValue = {
      ...this.form.value,
    };

    if (this.mode === 'add') {
      this.service
        .AddProject(
          formValue.title,
          formValue.titleLink,
          formValue.description,
          formValue.category,
          formValue.about_title,
          formValue.aboutDescription,
          formValue.content,
          formValue.solutionContent,
          formValue.industry,
          formValue.deliverables,
          formValue.clientReview,
          formValue.clientName,
          formValue.designation,
          formValue.title_1,
          formValue.desc_1,
          formValue.title_2,
          formValue.desc_2,
          formValue.title_3,
          formValue.desc_3,
          formValue.image,
          formValue.image_2,
          formValue.aboutBg,
          formValue.how_image,
          formValue.tech,
          formValue.projectLogo,
          formValue.headingIcon,
          formValue.overviewImage,
          formValue.resultImages,
          formValue.uiImages,
          formValue.techImages,
          formValue.development,
          formValue.workSteps,
          formValue.overviewPara,
          formValue.resultHeading_1,
          formValue.resultHeading_2,
          formValue.keyHeading,
          formValue.keyDescription,
          formValue.userFlowDescription
        )
        .subscribe({
          next: () => {
            this.showSuccessMessage('Data added successfully');
            this.dialogRef.close(true);
          },
          error: (error) => {
            this.isLoading = false;
            this.showErrorMessage(error.message);
          },
          complete: () => {
            this.isLoading = false;
          },
        });
    } else {
      this.service
        .UpdateProject(
          formValue.title,
          formValue.titleLink,
          formValue.description,
          formValue.category,
          formValue.about_title,
          formValue.aboutDescription,
          formValue.content,
          formValue.solutionContent,
          formValue.industry,
          formValue.deliverables,
          formValue.clientReview,
          formValue.clientName,
          formValue.designation,
          formValue.title_1,
          formValue.desc_1,
          formValue.title_2,
          formValue.desc_2,
          formValue.title_3,
          formValue.desc_3,
          formValue.image,
          formValue.image_2,
          formValue.aboutBg,
          formValue.how_image,
          formValue.tech,
          formValue.projectLogo,
          formValue.headingIcon,
          formValue.overviewImage,
          formValue.resultImages,
          formValue.uiImages,
          formValue.techImages,
          formValue.development,
          formValue.workSteps,
          formValue.overviewPara,
          formValue.resultHeading_1,
          formValue.resultHeading_2,
          formValue.keyHeading,
          formValue.keyDescription,
          formValue.userFlowDescription,
          this.ID ?? ''
        )
        .subscribe({
          next: () => {
            this.showSuccessMessage('Data updated successfully');
            this.dialogRef.close(true);
          },
          error: (error) => {
            this.isLoading = false;
            this.showErrorMessage(error.message);
          },
          complete: () => {
            this.isLoading = false;
          },
        });
    }
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
