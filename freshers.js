// ===== Add More Entry Functions =====

function addProject() {
    const container = document.getElementById('projectsContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-group">
            <label>Title of the Project</label>
            <input type="text" name="projectTitle" placeholder="e.g. Weather App" oninput="updatePreview()">
        </div>
        <div class="form-group">
            <label>Created / Developed / Utilised / Implemented</label>
            <textarea name="projectDesc" placeholder="Describe what you created/developed" oninput="updatePreview()"></textarea>
        </div>
        <div class="form-group">
            <label>Tools & Technologies Used</label>
            <input type="text" name="projectTech" placeholder="e.g. Java, Android Studio" oninput="updatePreview()">
        </div>
        <div class="form-group">
            <label>Role</label>
            <input type="text" name="projectRole" placeholder="e.g. Leader / Front End / Back End" oninput="updatePreview()">
        </div>
    `;
    container.appendChild(block);
    updatePreview();
}

function addLeadership() {
    const container = document.getElementById('leadershipContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-group">
            <label>Leadership Role / Activity</label>
            <input type="text" name="leadershipItem" placeholder="e.g. Vice President of Tech Club" oninput="updatePreview()">
        </div>
    `;
    container.appendChild(block);
    updatePreview();
}

function addAchievement() {
    const container = document.getElementById('achievementsContainer');
    const block = document.createElement('div');
    block.className = 'entry-block';
    block.innerHTML = `
        <button type="button" class="remove-btn" onclick="this.parentElement.remove(); updatePreview();">Remove</button>
        <div class="form-group">
            <label>Achievement</label>
            <input type="text" name="achievement" placeholder="e.g. Secured 99 percentile in GATE 2025" oninput="updatePreview()">
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
    data.city = document.getElementById('city').value.trim();
    data.email = document.getElementById('email').value.trim();
    data.phone = document.getElementById('phone').value.trim();
    data.linkedin = document.getElementById('linkedin').value.trim();
    data.github = document.getElementById('github').value.trim();
    data.leetcode = document.getElementById('leetcode').value.trim();

    // Profile Summary
    data.profileSummary = document.getElementById('profileSummary').value.trim();

    // Academic Details (fixed 4 blocks: PG, Graduation, 12th, 10th)
    data.academics = [];
    const eduBlocks = document.querySelectorAll('#academicContainer .entry-block');
    eduBlocks.forEach(block => {
        const degreeInput = block.querySelector('[name="eduDegree"]');
        const degree = degreeInput ? degreeInput.value.trim() : '';
        const college = block.querySelector('[name="eduCollege"]').value.trim();
        const cgpa = block.querySelector('[name="eduCGPA"]').value.trim();
        const year = block.querySelector('[name="eduYear"]').value.trim();
        const h3 = block.querySelector('h3');
        const label = h3 ? h3.textContent.trim() : '';
        if (college || degree) {
            data.academics.push({ label, degree, college, cgpa, year });
        }
    });

    // Technical Skills
    data.programmingLangs = document.getElementById('programmingLangs').value.trim();
    data.softwareDev = document.getElementById('softwareDev').value.trim();
    data.dbManagement = document.getElementById('dbManagement').value.trim();
    data.operatingSystems = document.getElementById('operatingSystems').value.trim();
    data.cloudTech = document.getElementById('cloudTech').value.trim();
    data.webTech = document.getElementById('webTech').value.trim();
    data.domainSkills = document.getElementById('domainSkills').value.trim();

    // Projects
    data.projects = [];
    const projectBlocks = document.querySelectorAll('#projectsContainer .entry-block');
    projectBlocks.forEach(block => {
        const title = block.querySelector('[name="projectTitle"]').value.trim();
        const desc = block.querySelector('[name="projectDesc"]').value.trim();
        const tech = block.querySelector('[name="projectTech"]').value.trim();
        const role = block.querySelector('[name="projectRole"]').value.trim();
        if (title) data.projects.push({ title, desc, tech, role });
    });

    // Co-Curricular & Extra-Curricular
    data.hackathons = document.getElementById('hackathons').value.trim();
    data.certifications = document.getElementById('certifications').value.trim();
    data.patents = document.getElementById('patents').value.trim();

    // Leadership Skills
    data.leadership = [];
    const leaderBlocks = document.querySelectorAll('#leadershipContainer .entry-block');
    leaderBlocks.forEach(block => {
        const item = block.querySelector('[name="leadershipItem"]').value.trim();
        if (item) data.leadership.push(item);
    });

    // Achievements
    data.achievements = [];
    const achieveBlocks = document.querySelectorAll('#achievementsContainer .entry-block');
    achieveBlocks.forEach(block => {
        const text = block.querySelector('[name="achievement"]').value.trim();
        if (text) data.achievements.push(text);
    });

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

    if (!data.fullName && !data.email && !data.phone) {
        el.innerHTML = '<div class="rv-empty">Start typing to see your resume here...</div>';
        return;
    }

    let html = '';

    // === NAME (centered, uppercase) ===
    if (data.fullName) {
        html += '<div class="rv-name" style="text-align:center;">' + esc(data.fullName.toUpperCase()) + '</div>';
    }

    // === CONTACT LINE (centered) ===
    const contactParts = [];
    if (data.city) contactParts.push(esc(data.city));
    if (data.email) contactParts.push(esc(data.email));
    if (data.phone) contactParts.push(esc(data.phone));
    if (data.linkedin) contactParts.push('<a href="' + esc(data.linkedin) + '">' + esc(data.linkedin) + '</a>');
    if (data.github) contactParts.push('<a href="' + esc(data.github) + '">' + esc(data.github) + '</a>');
    if (data.leetcode) contactParts.push('<a href="' + esc(data.leetcode) + '">' + esc(data.leetcode) + '</a>');
    if (contactParts.length) {
        html += '<div class="rv-contact" style="text-align:center;">' + contactParts.join(' | ') + '</div>';
    }

    // === PROFILE SUMMARY ===
    if (data.profileSummary) {
        html += '<div class="rv-section-title">PROFILE SUMMARY</div>';
        html += '<div style="text-align: justify;">' + esc(data.profileSummary) + '</div>';
    }

    // === ACADEMIC DETAILS ===
    if (data.academics.length) {
        html += '<div class="rv-section-title">ACADEMIC DETAILS</div>';
        data.academics.forEach(a => {
            const degreeText = a.degree || a.label;
            html += '<div class="rv-bullet"><b>' + esc(degreeText) + '</b></div>';
            const details = [];
            if (a.college) details.push(esc(a.college));
            if (a.cgpa) details.push(esc(a.cgpa));
            if (a.year) details.push(esc(a.year));
            if (details.length) {
                html += '<div class="rv-entry-detail">' + details.join(' | ') + '</div>';
            }
        });
    }

    // === TECHNICAL SKILLS ===
    const hasSkills = data.programmingLangs || data.softwareDev || data.dbManagement ||
        data.operatingSystems || data.cloudTech || data.webTech || data.domainSkills;
    if (hasSkills) {
        html += '<div class="rv-section-title">TECHNICAL SKILLS</div>';
        if (data.programmingLangs) html += '<div class="rv-bullet">Programming Languages: ' + esc(data.programmingLangs) + '</div>';
        if (data.softwareDev) html += '<div class="rv-bullet">Software Development Skills: ' + esc(data.softwareDev) + '</div>';
        if (data.dbManagement) html += '<div class="rv-bullet">Database Management: ' + esc(data.dbManagement) + '</div>';
        if (data.operatingSystems) html += '<div class="rv-bullet">Operating Systems: ' + esc(data.operatingSystems) + '</div>';
        if (data.cloudTech) html += '<div class="rv-bullet">Cloud Technologies: ' + esc(data.cloudTech) + '</div>';
        if (data.webTech) html += '<div class="rv-bullet">Web Technologies: ' + esc(data.webTech) + '</div>';
        if (data.domainSkills) html += '<div class="rv-bullet">Domain Based Skills: ' + esc(data.domainSkills) + '</div>';
    }

    // === PROJECTS ===
    if (data.projects.length) {
        html += '<div class="rv-section-title">PROJECTS</div>';
        data.projects.forEach(p => {
            html += '<div class="rv-bullet"><b>' + esc(p.title) + '</b></div>';
            if (p.desc) html += '<div class="rv-sub-bullet">' + esc(p.desc) + '</div>';
            if (p.tech) html += '<div class="rv-sub-bullet">Tools & Technologies: ' + esc(p.tech) + '</div>';
            if (p.role) html += '<div class="rv-sub-bullet">Role: ' + esc(p.role) + '</div>';
        });
    }

    // === CO-CURRICULAR & EXTRA-CURRICULAR ===
    const hasActivities = data.hackathons || data.certifications || data.patents;
    if (hasActivities) {
        html += '<div class="rv-section-title">CO-CURRICULAR & EXTRA-CURRICULAR ACTIVITIES</div>';
        if (data.hackathons) html += '<div class="rv-bullet">Hackathons: ' + esc(data.hackathons) + '</div>';
        if (data.certifications) html += '<div class="rv-bullet">Certifications: ' + esc(data.certifications) + '</div>';
        if (data.patents) html += '<div class="rv-bullet">Patents/Publications: ' + esc(data.patents) + '</div>';
    }

    // === LEADERSHIP SKILLS ===
    if (data.leadership.length) {
        html += '<div class="rv-section-title">LEADERSHIP SKILLS</div>';
        data.leadership.forEach(l => {
            html += '<div class="rv-bullet">' + esc(l) + '</div>';
        });
    }

    // === ACHIEVEMENTS ===
    if (data.achievements.length) {
        html += '<div class="rv-section-title">ACHIEVEMENTS</div>';
        data.achievements.forEach(a => {
            html += '<div class="rv-bullet">' + esc(a) + '</div>';
        });
    }

    el.innerHTML = html;
}


// ===== Attach Live Preview Listeners =====

document.addEventListener('DOMContentLoaded', function () {
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

    function addBullet(text, bold, indent) {
        if (!text) return;
        const indentVal = indent || 5;
        const x = margin + indentVal;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('•', margin + indentVal - 4, y);
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        const lines = doc.splitTextToSize(text, contentWidth - indentVal);
        checkPage(lines.length * 5 + 2);
        doc.text(lines, x, y);
        y += lines.length * 5;
    }

    function addSubBullet(text) {
        if (!text) return;
        const x = margin + 12;
        doc.setFontSize(9.5);
        doc.setFont('helvetica', 'normal');
        doc.text('○', margin + 9, y);
        const lines = doc.splitTextToSize(text, contentWidth - 14);
        checkPage(lines.length * 4.5 + 2);
        doc.text(lines, x, y);
        y += lines.length * 4.5;
    }

    // Name Header
    doc.setFontSize(18);
    doc.setFont('times', 'bold');
    doc.text(data.fullName.toUpperCase(), pageWidth / 2, y, { align: 'center' });
    y += 6;

    // Contact line
    const contactParts = [];
    if (data.city) contactParts.push(data.city);
    if (data.email) contactParts.push(data.email);
    if (data.phone) contactParts.push(data.phone);
    if (data.linkedin) contactParts.push(data.linkedin);
    if (data.github) contactParts.push(data.github);
    if (data.leetcode) contactParts.push(data.leetcode);
    if (contactParts.length) {
        doc.setFontSize(9);
        doc.setFont('times', 'normal');
        const contactLine = contactParts.join(' | ');
        const contactLines = doc.splitTextToSize(contactLine, contentWidth);
        contactLines.forEach(line => {
            doc.text(line, pageWidth / 2, y, { align: 'center' });
            y += 4;
        });
        y += 3;
    }

    // Profile Summary
    if (data.profileSummary) {
        addSectionTitle('Profile Summary');
        addText(data.profileSummary);
        y += 3;
    }

    // Academic Details
    if (data.academics.length) {
        addSectionTitle('Academic Details');
        data.academics.forEach(a => {
            const degreeText = a.degree || a.label;
            addBullet(degreeText, true);
            const details = [];
            if (a.college) details.push(a.college);
            if (a.cgpa) details.push(a.cgpa);
            if (a.year) details.push(a.year);
            if (details.length) {
                addText(details.join(' | '), false, 5);
            }
            y += 1;
        });
        y += 2;
    }

    // Technical Skills
    const hasSkills = data.programmingLangs || data.softwareDev || data.dbManagement ||
        data.operatingSystems || data.cloudTech || data.webTech || data.domainSkills;
    if (hasSkills) {
        addSectionTitle('Technical Skills');
        if (data.programmingLangs) addBullet(`Programming Languages: ${data.programmingLangs}`, false);
        if (data.softwareDev) addBullet(`Software Development Skills: ${data.softwareDev}`, false);
        if (data.dbManagement) addBullet(`Database Management: ${data.dbManagement}`, false);
        if (data.operatingSystems) addBullet(`Operating Systems: ${data.operatingSystems}`, false);
        if (data.cloudTech) addBullet(`Cloud Technologies: ${data.cloudTech}`, false);
        if (data.webTech) addBullet(`Web Technologies: ${data.webTech}`, false);
        if (data.domainSkills) addBullet(`Domain Based Skills: ${data.domainSkills}`, false);
        y += 3;
    }

    // Projects
    if (data.projects.length) {
        addSectionTitle('Projects');
        data.projects.forEach(p => {
            addBullet(p.title, true);
            if (p.desc) addSubBullet(p.desc);
            if (p.tech) addSubBullet(`Tools & Technologies used: ${p.tech}`);
            if (p.role) addSubBullet(`Role: ${p.role}`);
            y += 2;
        });
        y += 1;
    }

    // Co-Curricular & Extra-Curricular
    const hasActivities = data.hackathons || data.certifications || data.patents;
    if (hasActivities) {
        addSectionTitle('Co-Curricular & Extra-Curricular Activities');
        if (data.hackathons) addBullet(`Hackathons: ${data.hackathons}`, false);
        if (data.certifications) addBullet(`Certifications: ${data.certifications}`, false);
        if (data.patents) addBullet(`Patents/Publications: ${data.patents}`, false);
        y += 3;
    }

    // Leadership Skills
    if (data.leadership.length) {
        addSectionTitle('Leadership Skills');
        data.leadership.forEach(l => {
            addBullet(l, false);
        });
        y += 3;
    }

    // Achievements
    if (data.achievements.length) {
        addSectionTitle('Achievements');
        data.achievements.forEach(a => {
            addBullet(a, false);
        });
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

    function bulletPara(text, bold) {
        return new Paragraph({
            children: [new TextRun({ text, size: 23, font: 'Times New Roman', bold: bold || false })],
            spacing: { after: 40 },
            bullet: { level: 0 },
        });
    }

    function subBulletPara(text) {
        return new Paragraph({
            children: [new TextRun({ text, size: 22, font: 'Times New Roman' })],
            spacing: { after: 30 },
            bullet: { level: 1 },
        });
    }

    function normalPara(text, options = {}) {
        return new Paragraph({
            children: [new TextRun({ text, size: 23, font: 'Times New Roman', bold: options.bold || false })],
            spacing: { after: 60 },
            indent: options.indent ? { left: 360 } : undefined,
        });
    }

    // Name
    children.push(new Paragraph({
        children: [new TextRun({ text: data.fullName.toUpperCase(), bold: true, size: 36, font: 'Times New Roman' })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
    }));

    // Contact info
    const contactParts = [];
    if (data.city) contactParts.push(data.city);
    if (data.email) contactParts.push(data.email);
    if (data.phone) contactParts.push(data.phone);
    if (data.linkedin) contactParts.push(data.linkedin);
    if (data.github) contactParts.push(data.github);
    if (data.leetcode) contactParts.push(data.leetcode);
    if (contactParts.length) {
        children.push(new Paragraph({
            children: [new TextRun({ text: contactParts.join(' | '), size: 20, font: 'Times New Roman' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 160 },
        }));
    }

    // Profile Summary
    if (data.profileSummary) {
        children.push(sectionHeading('Profile Summary'));
        children.push(normalPara(data.profileSummary));
    }

    // Academic Details
    if (data.academics.length) {
        children.push(sectionHeading('Academic Details'));
        data.academics.forEach(a => {
            const degreeText = a.degree || a.label;
            children.push(bulletPara(degreeText, true));
            const details = [];
            if (a.college) details.push(a.college);
            if (a.cgpa) details.push(a.cgpa);
            if (a.year) details.push(a.year);
            if (details.length) {
                children.push(normalPara(details.join(' | '), { indent: true }));
            }
        });
    }

    // Technical Skills
    const hasSkills = data.programmingLangs || data.softwareDev || data.dbManagement ||
        data.operatingSystems || data.cloudTech || data.webTech || data.domainSkills;
    if (hasSkills) {
        children.push(sectionHeading('Technical Skills'));
        if (data.programmingLangs) children.push(bulletPara(`Programming Languages: ${data.programmingLangs}`, true));
        if (data.softwareDev) children.push(bulletPara(`Software Development Skills: ${data.softwareDev}`, true));
        if (data.dbManagement) children.push(bulletPara(`Database Management: ${data.dbManagement}`, true));
        if (data.operatingSystems) children.push(bulletPara(`Operating Systems: ${data.operatingSystems}`, true));
        if (data.cloudTech) children.push(bulletPara(`Cloud Technologies: ${data.cloudTech}`, true));
        if (data.webTech) children.push(bulletPara(`Web Technologies: ${data.webTech}`, true));
        if (data.domainSkills) children.push(bulletPara(`Domain Based Skills: ${data.domainSkills}`, true));
    }

    // Projects
    if (data.projects.length) {
        children.push(sectionHeading('Projects'));
        data.projects.forEach(p => {
            children.push(bulletPara(p.title, true));
            if (p.desc) children.push(subBulletPara(p.desc));
            if (p.tech) children.push(subBulletPara(`Tools & Technologies used: ${p.tech}`));
            if (p.role) children.push(subBulletPara(`Role: ${p.role}`));
        });
    }

    // Co-Curricular & Extra-Curricular
    const hasActivities = data.hackathons || data.certifications || data.patents;
    if (hasActivities) {
        children.push(sectionHeading('Co-Curricular & Extra-Curricular Activities'));
        if (data.hackathons) children.push(bulletPara(`Hackathons: ${data.hackathons}`));
        if (data.certifications) children.push(bulletPara(`Certifications: ${data.certifications}`));
        if (data.patents) children.push(bulletPara(`Patents/Publications: ${data.patents}`));
    }

    // Leadership Skills
    if (data.leadership.length) {
        children.push(sectionHeading('Leadership Skills'));
        data.leadership.forEach(l => {
            children.push(bulletPara(l));
        });
    }

    // Achievements
    if (data.achievements.length) {
        children.push(sectionHeading('Achievements'));
        data.achievements.forEach(a => {
            children.push(bulletPara(a));
        });
    }

    const docFile = new Document({
        sections: [{ children }],
    });

    Packer.toBlob(docFile).then(blob => {
        saveAs(blob, `${data.fullName}_Resume.docx`);
    });
}
