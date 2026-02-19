// ===== Photo Preview =====

var uploadedPhotoDataUrl = null;

function previewPhoto(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        uploadedPhotoDataUrl = e.target.result;
        const preview = document.getElementById('photoPreview');
        preview.innerHTML = '<img src="' + e.target.result + '" alt="Your Photo">';
        updatePreview();
    };
    reader.readAsDataURL(file);
}


// ===== Add More Entry Functions =====

function addProject() {
    const container = document.getElementById('projectsContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-group">
            <label>Project Name</label>
            <input type="text" name="projectName" placeholder="e.g. E-Commerce Website" oninput="updatePreview()">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="projectDesc" placeholder="Brief description of the project" oninput="updatePreview()"></textarea>
        </div>
        <div class="form-group">
            <label>Technologies Used</label>
            <input type="text" name="projectTech" placeholder="e.g. React, Node.js, MongoDB" oninput="updatePreview()">
        </div>
    `;
    container.appendChild(block);
    updatePreview();
}

function addInternship() {
    const container = document.getElementById('internshipsContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-group">
            <label>Company</label>
            <input type="text" name="internCompany" placeholder="e.g. Google" oninput="updatePreview()">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Role</label>
                <input type="text" name="internRole" placeholder="e.g. Software Intern" oninput="updatePreview()">
            </div>
            <div class="form-group">
                <label>Duration</label>
                <input type="text" name="internDuration" placeholder="e.g. May 2025 - July 2025" oninput="updatePreview()">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="internDesc" placeholder="What did you work on?" oninput="updatePreview()"></textarea>
        </div>
    `;
    container.appendChild(block);
    updatePreview();
}

function addCert() {
    const container = document.getElementById('certsContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-row">
            <div class="form-group">
                <label>Certification Name</label>
                <input type="text" name="certName" placeholder="e.g. AWS Cloud Practitioner" oninput="updatePreview()">
            </div>
            <div class="form-group">
                <label>Issuing Organization</label>
                <input type="text" name="certOrg" placeholder="e.g. Amazon Web Services" oninput="updatePreview()">
            </div>
        </div>
    `;
    container.appendChild(block);
    updatePreview();
}

function addExtra() {
    const container = document.getElementById('extracurricularContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-row">
            <div class="form-group">
                <label>Activity</label>
                <input type="text" name="extraActivity" placeholder="e.g. Coding Club" oninput="updatePreview()">
            </div>
            <div class="form-group">
                <label>Role / Description</label>
                <input type="text" name="extraRole" placeholder="e.g. Vice President" oninput="updatePreview()">
            </div>
        </div>
    `;
    container.appendChild(block);
    updatePreview();
}

function addLanguage() {
    const container = document.getElementById('languagesContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-row">
            <div class="form-group">
                <label>Language</label>
                <input type="text" name="langName" placeholder="e.g. Hindi" oninput="updatePreview()">
            </div>
            <div class="form-group">
                <label>Proficiency</label>
                <select name="langProf" onchange="updatePreview()">
                    <option value="Native">Native</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Basic">Basic</option>
                </select>
            </div>
        </div>
    `;
    container.appendChild(block);
    updatePreview();
}


// ===== Collect Form Data =====

function collectData() {
    const data = {};

    // Personal Info
    data.fullName = document.getElementById('fullName').value.trim();
    data.address = document.getElementById('address').value.trim();
    data.phone = document.getElementById('phone').value.trim();
    data.email = document.getElementById('email').value.trim();
    data.linkedin = document.getElementById('linkedin').value.trim();
    data.github = document.getElementById('github').value.trim();
    data.leetcode = document.getElementById('leetcode').value.trim();
    data.photo = uploadedPhotoDataUrl;

    // Career Objective
    data.objective = document.getElementById('objective').value.trim();

    // Education
    data.college = document.getElementById('college').value.trim();
    data.branch = document.getElementById('branch').value.trim();
    data.cgpa = document.getElementById('cgpa').value.trim();
    data.yearOfPassing = document.getElementById('yearOfPassing').value.trim();
    data.school12 = document.getElementById('school12').value.trim();
    data.board12 = document.getElementById('board12').value.trim();
    data.percentage12 = document.getElementById('percentage12').value.trim();
    data.school10 = document.getElementById('school10').value.trim();
    data.board10 = document.getElementById('board10').value.trim();
    data.percentage10 = document.getElementById('percentage10').value.trim();

    // Skills
    data.technicalSkills = document.getElementById('technicalSkills').value.trim();
    data.softSkills = document.getElementById('softSkills').value.trim();

    // Projects
    data.projects = [];
    const projectBlocks = document.querySelectorAll('#projectsContainer .entry-block');
    projectBlocks.forEach(block => {
        const name = block.querySelector('[name="projectName"]').value.trim();
        const desc = block.querySelector('[name="projectDesc"]').value.trim();
        const tech = block.querySelector('[name="projectTech"]').value.trim();
        if (name) data.projects.push({ name, desc, tech });
    });

    // Internships
    data.internships = [];
    const internBlocks = document.querySelectorAll('#internshipsContainer .entry-block');
    internBlocks.forEach(block => {
        const company = block.querySelector('[name="internCompany"]').value.trim();
        const role = block.querySelector('[name="internRole"]').value.trim();
        const duration = block.querySelector('[name="internDuration"]').value.trim();
        const desc = block.querySelector('[name="internDesc"]').value.trim();
        if (company) data.internships.push({ company, role, duration, desc });
    });

    // Certifications
    data.certifications = [];
    const certBlocks = document.querySelectorAll('#certsContainer .entry-block');
    certBlocks.forEach(block => {
        const name = block.querySelector('[name="certName"]').value.trim();
        const org = block.querySelector('[name="certOrg"]').value.trim();
        if (name) data.certifications.push({ name, org });
    });

    // Extracurricular
    data.extracurricular = [];
    const extraBlocks = document.querySelectorAll('#extracurricularContainer .entry-block');
    extraBlocks.forEach(block => {
        const activity = block.querySelector('[name="extraActivity"]').value.trim();
        const role = block.querySelector('[name="extraRole"]').value.trim();
        if (activity) data.extracurricular.push({ activity, role });
    });

    // Languages
    data.languages = [];
    const langBlocks = document.querySelectorAll('#languagesContainer .entry-block');
    langBlocks.forEach(block => {
        const name = block.querySelector('[name="langName"]').value.trim();
        const prof = block.querySelector('[name="langProf"]').value;
        if (name) data.languages.push({ name, prof });
    });

    // Personal Details
    data.dob = document.getElementById('dob').value.trim();
    data.gender = document.getElementById('gender').value;
    data.nationality = document.getElementById('nationality').value.trim();
    data.permanentAddress = document.getElementById('permanentAddress').value.trim();
    data.linguisticCompetency = document.getElementById('linguisticCompetency').value.trim();
    data.hobbies = document.getElementById('hobbies').value.trim();

    return data;
}


// ===== LIVE PREVIEW =====

function esc(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function updatePreview() {
    const data = collectData();
    const el = document.getElementById('resumePreview');

    // If nothing filled yet, show placeholder
    if (!data.fullName && !data.email && !data.phone) {
        el.innerHTML = '<div class="rv-empty">Start typing to see your resume here...</div>';
        return;
    }

    let html = '';

    // === HEADER: Name ===
    if (data.fullName) html += '<div class="rv-name">' + esc(data.fullName.toUpperCase()) + '</div>';

    // === CONTACT + PHOTO (parallel) ===
    html += '<div class="rv-contact-photo-wrapper">';
    html += '<div class="rv-contacts">';
    if (data.address) html += '<div class="rv-contact"><b>Address</b>: ' + esc(data.address) + '</div>';
    if (data.phone) html += '<div class="rv-contact"><b>Mobile Number</b>: ' + esc(data.phone) + '</div>';
    if (data.email) html += '<div class="rv-contact"><b>Email Id</b>: ' + esc(data.email) + '</div>';
    if (data.linkedin) html += '<div class="rv-contact"><b>LinkedIn</b>: <a href="' + esc(data.linkedin) + '">' + esc(data.linkedin) + '</a></div>';
    if (data.github) html += '<div class="rv-contact"><b>GitHub</b>: <a href="' + esc(data.github) + '">' + esc(data.github) + '</a></div>';
    if (data.leetcode) html += '<div class="rv-contact"><b>LeetCode</b>: <a href="' + esc(data.leetcode) + '">' + esc(data.leetcode) + '</a></div>';
    html += '</div>';
    if (data.photo) {
        html += '<img class="rv-photo" src="' + data.photo + '" alt="Photo">';
    }
    html += '</div>';

    html += '<hr class="rv-divider">';

    // === CAREER OBJECTIVE ===
    if (data.objective) {
        html += '<div class="rv-section-title">CAREER OBJECTIVE</div>';
        html += '<div class="rv-objective" style="text-align: justify;">' + esc(data.objective) + '</div>';
        html += '<hr class="rv-divider">';
    }

    // === EDUCATION ===
    const hasEdu = data.college || data.school12 || data.school10;
    if (hasEdu) {
        html += '<div class="rv-section-title">EDUCATION QUALIFICATION</div>';
        if (data.college) {
            html += '<div class="rv-entry-title">' + esc(data.branch) + ' — ' + esc(data.college) + '</div>';
            let parts = [];
            if (data.cgpa) parts.push('CGPA: ' + esc(data.cgpa));
            if (data.yearOfPassing) parts.push('Year of Passing: ' + esc(data.yearOfPassing));
            if (parts.length) html += '<div class="rv-entry-detail">' + parts.join('  |  ') + '</div>';
        }
        if (data.school12) {
            html += '<div class="rv-entry-title">Grade 12 — ' + esc(data.school12) + '</div>';
            let d12 = [];
            if (data.board12) d12.push('Board: ' + esc(data.board12));
            if (data.percentage12) d12.push('Percentage: ' + esc(data.percentage12));
            if (d12.length) html += '<div class="rv-entry-detail">' + d12.join('  |  ') + '</div>';
        }
        if (data.school10) {
            html += '<div class="rv-entry-title">Grade 10 — ' + esc(data.school10) + '</div>';
            let d10 = [];
            if (data.board10) d10.push('Board: ' + esc(data.board10));
            if (data.percentage10) d10.push('Percentage: ' + esc(data.percentage10));
            if (d10.length) html += '<div class="rv-entry-detail">' + d10.join('  |  ') + '</div>';
        }
    }

    // === SKILLS ===
    if (data.technicalSkills || data.softSkills) {
        html += '<div class="rv-section-title">SKILLS</div>';
        if (data.technicalSkills) html += '<div class="rv-bullet">Technical: ' + esc(data.technicalSkills) + '</div>';
        if (data.softSkills) html += '<div class="rv-bullet">Soft Skills: ' + esc(data.softSkills) + '</div>';
    }

    // === PROJECTS ===
    if (data.projects.length) {
        html += '<div class="rv-section-title">PROJECTS</div>';
        data.projects.forEach(p => {
            html += '<div class="rv-bullet"><b>' + esc(p.name) + '</b></div>';
            if (p.tech) html += '<div class="rv-sub-bullet">Technologies: ' + esc(p.tech) + '</div>';
            if (p.desc) html += '<div class="rv-sub-bullet">' + esc(p.desc) + '</div>';
        });
    }

    // === INTERNSHIPS ===
    if (data.internships.length) {
        html += '<div class="rv-section-title">INTERNSHIPS</div>';
        data.internships.forEach(i => {
            html += '<div class="rv-bullet"><b>' + esc(i.role) + ' — ' + esc(i.company) + '</b></div>';
            if (i.duration) html += '<div class="rv-sub-bullet">' + esc(i.duration) + '</div>';
            if (i.desc) html += '<div class="rv-sub-bullet">' + esc(i.desc) + '</div>';
        });
    }

    // === CERTIFICATIONS ===
    if (data.certifications.length) {
        html += '<div class="rv-section-title">CERTIFICATIONS</div>';
        data.certifications.forEach(c => {
            html += '<div class="rv-bullet">' + esc(c.name) + (c.org ? ' — ' + esc(c.org) : '') + '</div>';
        });
    }

    // === EXTRACURRICULAR ===
    if (data.extracurricular.length) {
        html += '<div class="rv-section-title">CO-CURRICULAR ACTIVITIES</div>';
        data.extracurricular.forEach(e => {
            html += '<div class="rv-bullet">' + esc(e.activity) + (e.role ? ' — ' + esc(e.role) : '') + '</div>';
        });
    }

    // === LANGUAGES ===
    if (data.languages.length) {
        html += '<div class="rv-section-title">LANGUAGES</div>';
        data.languages.forEach(l => {
            html += '<div class="rv-bullet">' + esc(l.name) + ' — ' + esc(l.prof) + '</div>';
        });
    }

    // === PERSONAL DETAILS ===
    const hasPersonal = data.dob || data.gender || data.nationality || data.permanentAddress || data.linguisticCompetency || data.hobbies;
    if (hasPersonal) {
        html += '<div class="rv-section-title">PERSONAL DETAILS</div>';
        if (data.dob) html += '<div class="rv-labeled"><span class="rv-label">Date of Birth</span><span>: ' + esc(data.dob) + '</span></div>';
        if (data.gender) html += '<div class="rv-labeled"><span class="rv-label">Gender</span><span>: ' + esc(data.gender) + '</span></div>';
        if (data.nationality) html += '<div class="rv-labeled"><span class="rv-label">Nationality</span><span>: ' + esc(data.nationality) + '</span></div>';
        if (data.permanentAddress) html += '<div class="rv-labeled"><span class="rv-label">Permanent Address</span><span>: ' + esc(data.permanentAddress) + '</span></div>';
        if (data.linguisticCompetency) html += '<div class="rv-labeled"><span class="rv-label">Linguistic Competency</span><span>: ' + esc(data.linguisticCompetency) + '</span></div>';
        if (data.hobbies) html += '<div class="rv-labeled"><span class="rv-label">Hobbies</span><span>: ' + esc(data.hobbies) + '</span></div>';
    }

    el.innerHTML = html;
}


// ===== Attach Live Preview Listeners =====

document.addEventListener('DOMContentLoaded', function () {
    // All static inputs/textareas/selects
    const form = document.getElementById('resumeForm');
    form.addEventListener('input', updatePreview);
    form.addEventListener('change', updatePreview);
});


// ===== PDF Generation =====

function downloadPDF() {
    const data = collectData();
    if (!data.fullName) {
        alert('Please enter your full name before downloading.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const contentWidth = pageWidth - margin * 2;
    let y = 15;

    function checkPage(needed) {
        if (y + needed > 280) {
            doc.addPage();
            y = 15;
        }
    }

    function addSectionTitle(title) {
        checkPage(14);
        doc.setFontSize(12);
        doc.setFont('times', 'bold');
        doc.text(title.toUpperCase(), margin, y);
        y += 1;
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 6;
    }

    function addText(text, bold, indent) {
        if (!text) return;
        const x = margin + (indent || 0);
        const maxWidth = contentWidth - (indent || 0);
        doc.setFontSize(11.5);
        doc.setFont('times', bold ? 'bold' : 'normal');
        const lines = doc.splitTextToSize(text, maxWidth);
        checkPage(lines.length * 5 + 2);
        doc.text(lines, x, y);
        y += lines.length * 5;
    }

    function addLabeledLine(label, value) {
        if (!value) return;
        checkPage(7);
        doc.setFontSize(11.5);
        doc.setFont('times', 'bold');
        doc.text(label, margin, y);
        const labelWidth = doc.getTextWidth(label + ' ');
        doc.setFont('times', 'normal');
        doc.text(value, margin + labelWidth, y);
        y += 5;
    }

    // ===== Header: Name + Photo =====
    const photoWidth = 30;
    const photoHeight = 36;

    doc.setFontSize(16);
    doc.setFont('times', 'bold');
    doc.text(data.fullName.toUpperCase(), margin, y);
    const nameStartY = y;
    y += 6;

    if (data.address) addLabeledLine('Address:', data.address);
    if (data.phone) addLabeledLine('Mobile Number:', data.phone);
    if (data.email) addLabeledLine('Email Id:', data.email);
    if (data.linkedin) {
        doc.setFontSize(11.5);
        doc.setFont('times', 'bold');
        doc.text('LinkedIn: ', margin, y);
        const lw = doc.getTextWidth('LinkedIn: ');
        doc.setFont('times', 'normal');
        doc.setTextColor(41, 128, 185);
        doc.text(data.linkedin, margin + lw, y);
        doc.setTextColor(0, 0, 0);
        y += 5;
    }
    if (data.github) {
        doc.setFontSize(11.5);
        doc.setFont('times', 'bold');
        doc.text('GitHub: ', margin, y);
        const gw = doc.getTextWidth('GitHub: ');
        doc.setFont('times', 'normal');
        doc.setTextColor(41, 128, 185);
        doc.text(data.github, margin + gw, y);
        doc.setTextColor(0, 0, 0);
        y += 5;
    }
    if (data.leetcode) {
        doc.setFontSize(11.5);
        doc.setFont('times', 'bold');
        doc.text('LeetCode: ', margin, y);
        const lcw = doc.getTextWidth('LeetCode: ');
        doc.setFont('times', 'normal');
        doc.setTextColor(41, 128, 185);
        doc.text(data.leetcode, margin + lcw, y);
        doc.setTextColor(0, 0, 0);
        y += 5;
    }

    if (data.photo) {
        try {
            doc.addImage(data.photo, 'JPEG', pageWidth - margin - photoWidth, nameStartY - 5, photoWidth, photoHeight);
        } catch (e) {
            console.warn('Could not add photo to PDF:', e);
        }
    }

    y = Math.max(y, nameStartY - 5 + photoHeight) + 5;

    // CAREER OBJECTIVE
    if (data.objective) {
        addSectionTitle('Career Objective');
        addText(data.objective);
        y += 3;
    }

    // EDUCATION
    addSectionTitle('Education');
    if (data.college) {
        addText(`${data.branch} — ${data.college}`, true);
        const eduDetails = [];
        if (data.cgpa) eduDetails.push(`CGPA: ${data.cgpa}`);
        if (data.yearOfPassing) eduDetails.push(`Year of Passing: ${data.yearOfPassing}`);
        if (eduDetails.length) addText(eduDetails.join('  |  '), false, 5);
        y += 2;
    }
    if (data.school12) {
        addText(`12th — ${data.school12}`, true);
        const details12 = [];
        if (data.board12) details12.push(`Board: ${data.board12}`);
        if (data.percentage12) details12.push(`Percentage: ${data.percentage12}`);
        if (details12.length) addText(details12.join('  |  '), false, 5);
        y += 2;
    }
    if (data.school10) {
        addText(`10th — ${data.school10}`, true);
        const details10 = [];
        if (data.board10) details10.push(`Board: ${data.board10}`);
        if (data.percentage10) details10.push(`Percentage: ${data.percentage10}`);
        if (details10.length) addText(details10.join('  |  '), false, 5);
        y += 2;
    }
    y += 1;

    // SKILLS
    if (data.technicalSkills || data.softSkills) {
        addSectionTitle('Skills');
        if (data.technicalSkills) addText(`Technical: ${data.technicalSkills}`, false, 0);
        if (data.softSkills) addText(`Soft Skills: ${data.softSkills}`, false, 0);
        y += 3;
    }

    // PROJECTS
    if (data.projects.length) {
        addSectionTitle('Projects');
        data.projects.forEach(p => {
            addText(p.name, true);
            if (p.tech) addText(`Technologies: ${p.tech}`, false, 5);
            if (p.desc) addText(p.desc, false, 5);
            y += 2;
        });
        y += 1;
    }

    // INTERNSHIPS
    if (data.internships.length) {
        addSectionTitle('Internships');
        data.internships.forEach(i => {
            addText(`${i.role} — ${i.company}`, true);
            if (i.duration) addText(i.duration, false, 5);
            if (i.desc) addText(i.desc, false, 5);
            y += 2;
        });
        y += 1;
    }

    // CERTIFICATIONS
    if (data.certifications.length) {
        addSectionTitle('Certifications');
        data.certifications.forEach(c => {
            addText(`${c.name}${c.org ? ' — ' + c.org : ''}`, false, 0);
        });
        y += 3;
    }

    // EXTRACURRICULAR
    if (data.extracurricular.length) {
        addSectionTitle('Extracurricular Activities');
        data.extracurricular.forEach(e => {
            addText(`${e.activity}${e.role ? ' — ' + e.role : ''}`, false, 0);
        });
        y += 3;
    }

    // LANGUAGES
    if (data.languages.length) {
        addSectionTitle('Languages');
        data.languages.forEach(l => {
            addText(`${l.name} — ${l.prof}`, false, 0);
        });
        y += 3;
    }

    // PERSONAL DETAILS
    const hasPersonal = data.dob || data.gender || data.nationality || data.permanentAddress || data.linguisticCompetency || data.hobbies;
    if (hasPersonal) {
        addSectionTitle('Personal Details');
        if (data.dob) addLabeledLine('Date of Birth', ': ' + data.dob);
        if (data.gender) addLabeledLine('Gender', ': ' + data.gender);
        if (data.nationality) addLabeledLine('Nationality', ': ' + data.nationality);
        if (data.permanentAddress) addLabeledLine('Permanent Address', ': ' + data.permanentAddress);
        if (data.linguisticCompetency) addLabeledLine('Linguistic Competency', ': ' + data.linguisticCompetency);
        if (data.hobbies) addLabeledLine('Hobbies', ': ' + data.hobbies);
    }

    doc.save(`${data.fullName}_Resume.pdf`);
}


// ===== DOC Generation =====

function downloadDOC() {
    const data = collectData();
    if (!data.fullName) {
        alert('Please enter your full name before downloading.');
        return;
    }

    const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } = window.docx;

    const children = [];

    function sectionHeading(text) {
        return new Paragraph({
            children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 24, font: 'Times New Roman' })],
            spacing: { before: 240, after: 80 },
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000' } },
        });
    }

    function normalPara(text, options = {}) {
        return new Paragraph({
            children: [new TextRun({ text, size: 23, font: 'Times New Roman', bold: options.bold || false })],
            spacing: { after: 60 },
            indent: options.indent ? { left: 360 } : undefined,
        });
    }

    function labeledPara(label, value, isLink) {
        const runs = [new TextRun({ text: label, bold: true, size: 23, font: 'Times New Roman' })];
        if (isLink) {
            runs.push(new TextRun({ text: value, size: 23, font: 'Times New Roman', color: '2980B9' }));
        } else {
            runs.push(new TextRun({ text: value, size: 23, font: 'Times New Roman' }));
        }
        return new Paragraph({ children: runs, spacing: { after: 40 } });
    }

    // Name
    children.push(new Paragraph({
        children: [new TextRun({ text: data.fullName.toUpperCase(), bold: true, size: 32, font: 'Times New Roman' })],
        spacing: { after: 40 },
    }));

    // Contact
    if (data.address) children.push(labeledPara('Address: ', data.address));
    if (data.phone) children.push(labeledPara('Mobile Number: ', data.phone));
    if (data.email) children.push(labeledPara('Email Id: ', data.email));
    if (data.linkedin) children.push(labeledPara('LinkedIn: ', data.linkedin, true));
    if (data.github) children.push(labeledPara('GitHub: ', data.github, true));
    if (data.leetcode) children.push(labeledPara('LeetCode: ', data.leetcode, true));

    // Career Objective
    if (data.objective) {
        children.push(sectionHeading('Career Objective'));
        children.push(normalPara(data.objective));
    }

    // Education
    children.push(sectionHeading('Education'));
    if (data.college) {
        children.push(normalPara(`${data.branch} — ${data.college}`, { bold: true }));
        const parts = [];
        if (data.cgpa) parts.push(`CGPA: ${data.cgpa}`);
        if (data.yearOfPassing) parts.push(`Year of Passing: ${data.yearOfPassing}`);
        if (parts.length) children.push(normalPara(parts.join('  |  '), { indent: true }));
    }
    if (data.school12) {
        children.push(normalPara(`12th — ${data.school12}`, { bold: true }));
        const d12 = [];
        if (data.board12) d12.push(`Board: ${data.board12}`);
        if (data.percentage12) d12.push(`Percentage: ${data.percentage12}`);
        if (d12.length) children.push(normalPara(d12.join('  |  '), { indent: true }));
    }
    if (data.school10) {
        children.push(normalPara(`10th — ${data.school10}`, { bold: true }));
        const d10 = [];
        if (data.board10) d10.push(`Board: ${data.board10}`);
        if (data.percentage10) d10.push(`Percentage: ${data.percentage10}`);
        if (d10.length) children.push(normalPara(d10.join('  |  '), { indent: true }));
    }

    // Skills
    if (data.technicalSkills || data.softSkills) {
        children.push(sectionHeading('Skills'));
        if (data.technicalSkills) children.push(normalPara(`Technical: ${data.technicalSkills}`));
        if (data.softSkills) children.push(normalPara(`Soft Skills: ${data.softSkills}`));
    }

    // Projects
    if (data.projects.length) {
        children.push(sectionHeading('Projects'));
        data.projects.forEach(p => {
            children.push(normalPara(p.name, { bold: true }));
            if (p.tech) children.push(normalPara(`Technologies: ${p.tech}`, { indent: true }));
            if (p.desc) children.push(normalPara(p.desc, { indent: true }));
        });
    }

    // Internships
    if (data.internships.length) {
        children.push(sectionHeading('Internships'));
        data.internships.forEach(i => {
            children.push(normalPara(`${i.role} — ${i.company}`, { bold: true }));
            if (i.duration) children.push(normalPara(i.duration, { indent: true }));
            if (i.desc) children.push(normalPara(i.desc, { indent: true }));
        });
    }

    // Certifications
    if (data.certifications.length) {
        children.push(sectionHeading('Certifications'));
        data.certifications.forEach(c => {
            children.push(normalPara(`${c.name}${c.org ? ' — ' + c.org : ''}`));
        });
    }

    // Extracurricular
    if (data.extracurricular.length) {
        children.push(sectionHeading('Extracurricular Activities'));
        data.extracurricular.forEach(e => {
            children.push(normalPara(`${e.activity}${e.role ? ' — ' + e.role : ''}`));
        });
    }

    // Languages
    if (data.languages.length) {
        children.push(sectionHeading('Languages'));
        data.languages.forEach(l => {
            children.push(normalPara(`${l.name} — ${l.prof}`));
        });
    }

    // Personal Details
    const hasPersonal = data.dob || data.gender || data.nationality || data.permanentAddress || data.linguisticCompetency || data.hobbies;
    if (hasPersonal) {
        children.push(sectionHeading('Personal Details'));
        if (data.dob) children.push(labeledPara('Date of Birth : ', data.dob));
        if (data.gender) children.push(labeledPara('Gender : ', data.gender));
        if (data.nationality) children.push(labeledPara('Nationality : ', data.nationality));
        if (data.permanentAddress) children.push(labeledPara('Permanent Address : ', data.permanentAddress));
        if (data.linguisticCompetency) children.push(labeledPara('Linguistic Competency : ', data.linguisticCompetency));
        if (data.hobbies) children.push(labeledPara('Hobbies : ', data.hobbies));
    }

    const docFile = new Document({
        sections: [{ children }],
    });

    Packer.toBlob(docFile).then(blob => {
        saveAs(blob, `${data.fullName}_Resume.docx`);
    });
}
