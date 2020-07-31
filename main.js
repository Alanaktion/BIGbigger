//Import Testimonials API
import { testimonials } from './testimonials.js'

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const testimonial = document.getElementById('testimonial');

first(testimonials).map(testimonial => {
    let li = createNode('li'),
        span = createNode('span');

        span.innerText = `${testimonial.testimonial}`;

        append(li, span);
        append(testimonial, li);
})