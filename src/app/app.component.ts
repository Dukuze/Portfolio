import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

	ngOnInit() {
	}

	align: 'start' | 'end' = 'start'; // ou 'end' selon votre besoin
	size: 'sm' | 'md' | 'lg' = 'md'; // Choisissez 'sm', 'md', ou 'lg' selon vos besoins

	selected(event: any) {
		console.log('Accordion item selected:', event);
	  }

	isExpressive: boolean = true; // Ajoute cette ligne pour définir isExpressive
	
	label: string = 'Chin Check'; // Assigne une valeur à label
	disabled: boolean = false; // Propriété pour désactiver les checkboxes
	indeterminate: boolean = false; // Propriété pour l'état indéterminé
	checked: boolean = false; // Propriété pour l'état checked
	hideLabel: boolean = false; // Propriété pour cacher le label
  
	// Méthode à appeler lors d'un changement de checked
	onChange(event: any) {
	  this.checked = event; // Met à jour l'état checked
	}
  
	// Méthode à appeler lors d'un changement d'indeterminate
	onIndeterminateChange(event: any) {
	  this.indeterminate = event; // Met à jour l'état indéterminé
	}
  	 

	model: any; // Déclare le modèle que tu vas utiliser avec ngModel
	readonly: boolean = true; // Par défaut, il est non-lecture
	invalid: boolean = false; // Indique si le champ est invalide
	appendInline: boolean = false; // Paramètre pour appendInline
	invalidText: string = ''; // Texte d'erreur pour les champs invalides
	warn: boolean = false; // Indique un avertissement
	warnText: string = ''; // Texte d'avertissement
	helperText: string = ''; // Texte d'aide pour le champ
	theme: 'light' | 'dark' = 'light'; // Assure-toi d'initialiser avec une valeur correcte
	dropUp: boolean = false; // Indique si la combobox s'ouvre vers le haut
	// Ajoute d'autres propriétés nécessaires
  
	// Méthodes pour gérer les événements
	submit(event: any) {
	  console.log('Submitted:', event);
	}
  
	search(event: any) {
	  console.log('Search:', event);
	}
  
	clear(event: any) {
	  console.log('Cleared:', event);
	}

	// 1. Propriétés pour le context-menu
	open: boolean = false; // Contrôle l'ouverture du menu contextuel

    // Dans catalog.component.ts
    position: { left: number; top: number } = { left: 0, top: 0 }; // Position du menu contextuel
  
	// 2. Propriétés pour le groupe radio
	radioGroupValue: string[] = []; // Valeur sélectionnée du groupe radio
  
	// 3. Propriétés pour le groupe checkbox
	checkboxGroupValue: string[] = []; // Valeurs sélectionnées du groupe checkbox
  
	// Méthode pour ouvrir le context-menu
    // Dans la méthode openContextMenu
    openContextMenu(event: MouseEvent) {
	this.open = true;
	this.position = { left: event.clientX, top: event.clientY }; // Met à jour avec les bonnes propriétés
	event.preventDefault(); // Empêche le menu contextuel par défaut du navigateur
    }
  
	// Méthodes pour gérer les changements de valeur
	onRadioChange(event: any) {
	  this.radioGroupValue = event;
	  console.log('Radio group value changed to:', this.radioGroupValue);
	}
  
	onCheckboxChange(event: any) {
	  this.checkboxGroupValue = event;
	  console.log('Checkbox group value changed to:', this.checkboxGroupValue);
	}


	placeholder: string = 'Sélectionner une date'; // Par exemple

	valueChange(event: any): void {
		console.log('Valeur changée :', event);
		// Ajoute ici le traitement que tu veux effectuer lorsque la valeur change
	  }

	 skeleton = false; 

	  onClose(event: any) {
		console.log("Dropdown closed", event);
	  }

	  items = [
		{ content: 'Option 1', selected: false, disabled: false },
		{ content: 'Option 2', selected: false, disabled: false },
		{ content: 'Option 3', selected: true, disabled: false }, // Option sélectionnée par défaut
		{ content: 'Option 4', selected: false, disabled: true }  // Option désactivée
	  ];

	  title = 'Uploader un fichier';
	  description = 'Veuillez sélectionner un fichier à uploader.';
	  buttonText = 'Téléverser';
	  buttonType: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' = 'primary'; // Valeur par défaut
	  accept: string[] = ['.jpg', '.png', '.pdf'];
	  multiple = true; // Si le mode multi-upload est activé
	  fileItemSize: 'sm' | 'md' | 'lg' = 'lg'; // Utilisez 'sm', 'md' ou 'lg'


	  type: 'success' | 'error' | 'warning' | 'info' = 'info'; // NotificationType
	  showClose: boolean = true;
      lowContrast: boolean = false;


	  min: number = 0; // Déclarez la propriété min
	  max: number = 100; // Déclarez la propriété max
	  step: number = 1; // Déclarez la propriété step

	 
	  autocomplete: string = 'on'; // Ajoutez cette propriété

	  fluid: boolean = true;  // Ajoutez fluid ici
	  expandable: boolean = true;  // Ajoutez expandable ici

	  border: boolean = true; // ou false selon vos besoins
	  condensed: boolean = false; // ou true selon vos besoins
	  nowrap: boolean = true; // ou false si le texte doit être coupé



}
