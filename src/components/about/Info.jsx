import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">10 años en el mercado</span>
      </div>

      <div className="about__box">
      <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Ubicación</h3>
        <span className="about__subtitle">Norte de Quito, Ecuador</span>
      </div>

      <div className="about__box">
      <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Puntuación</h3>
        <span className="about__subtitle">Excelente +700 opiniones</span>
      </div>
    </div>
    
  )
}

export default Info