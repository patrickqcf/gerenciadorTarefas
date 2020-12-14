import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective {
  // essa anotação fornece o valor através do html, deve ter o mesmo nome da diretiva
  @Input() tarefaConcluida: boolean;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
