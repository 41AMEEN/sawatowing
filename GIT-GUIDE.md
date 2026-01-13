# Git & GitHub Guide for SAWA TOWING Website

## 🚀 Quick Start Guide

### Method 1: Edit on GitHub (Web Interface)

#### To Edit Files:
1. Go to your GitHub repository
2. Navigate to the file you want to edit
3. Click the **pencil icon** (✏️) in the top right
4. Make your changes
5. Scroll down to "Commit changes"
6. Write a commit message (e.g., "Updated contact page")
7. Click **"Commit changes"**

#### To View File History:
1. Open any file
2. Click **"History"** button (clock icon)
3. See all previous versions
4. Click on any version to view it
5. Click **"Browse files"** at that version to restore

#### To Revert to Earlier Version:
1. Go to file → History
2. Find the version you want
3. Click **"Browse files"** at that commit
4. Or use **"Revert"** button if available

---

### Method 2: Using Git Commands (Recommended)

#### Initial Setup (One Time):

```bash
# 1. Install Git (if not installed)
# Download from: https://git-scm.com/downloads

# 2. Configure Git (one time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Navigate to your project folder
cd "C:\Users\41ame\OneDrive\Desktop\antigravity SAWA TOWING\sawa_site"

# 4. Initialize Git (if not already done)
git init

# 5. Connect to GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 6. First commit and push
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

---

## 📝 Daily Workflow

### Making Changes:

```bash
# 1. Make your edits to files (using any editor)

# 2. Check what changed
git status

# 3. See the actual changes
git diff

# 4. Stage your changes (add files to commit)
git add .                    # Add all changes
# OR
git add index.html          # Add specific file

# 5. Commit with a message
git commit -m "Updated contact page with new information"

# 6. Push to GitHub
git push
```

---

## 🔄 Going Back to Earlier Versions

### View History:
```bash
# See all commits
git log

# See commits in one line
git log --oneline

# See what changed in a commit
git show COMMIT-HASH
```

### Revert a File to Earlier Version:
```bash
# 1. Find the commit hash you want
git log --oneline

# 2. Revert specific file to that version
git checkout COMMIT-HASH -- filename.html

# Example:
git checkout abc123 -- index.html

# 3. Commit the revert
git add .
git commit -m "Reverted index.html to earlier version"
git push
```

### Undo Last Commit (Keep Changes):
```bash
# Undo commit but keep your changes
git reset --soft HEAD~1

# Then you can edit and recommit
```

### Undo Last Commit (Discard Changes):
```bash
# ⚠️ WARNING: This permanently deletes your changes!
git reset --hard HEAD~1
```

### Revert a Specific Commit:
```bash
# Create a new commit that undoes a previous commit
git revert COMMIT-HASH
git push
```

---

## 🌿 Working with Branches (Advanced)

### Create a Branch for Testing:
```bash
# Create and switch to new branch
git checkout -b test-changes

# Make changes, commit
git add .
git commit -m "Testing new design"

# Switch back to main
git checkout main

# Merge test branch (if you like the changes)
git merge test-changes
git push

# Delete test branch
git branch -d test-changes
```

---

## 📋 Common Commands Cheat Sheet

```bash
# Check status
git status

# See changes
git diff

# Add all changes
git add .

# Commit
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest from GitHub
git pull

# View history
git log --oneline

# See what branch you're on
git branch

# Switch branches
git checkout branch-name
```

---

## 🔐 Authentication

### If GitHub asks for password:

**Option 1: Personal Access Token (Recommended)**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy token
5. Use token as password when pushing

**Option 2: GitHub Desktop App**
- Download: https://desktop.github.com/
- Easier GUI for Git operations

---

## ⚠️ Important Tips

1. **Always commit with descriptive messages:**
   - ❌ Bad: "fix"
   - ✅ Good: "Fixed contact form validation issue"

2. **Commit often:**
   - Small, frequent commits are better than large ones

3. **Pull before push:**
   ```bash
   git pull
   git push
   ```

4. **Check status before committing:**
   ```bash
   git status
   ```

5. **Don't commit sensitive data:**
   - Never commit passwords, API keys, etc.

---

## 🆘 Troubleshooting

### "Your branch is ahead of origin"
```bash
git push
```

### "Your branch is behind origin"
```bash
git pull
```

### Merge conflicts:
```bash
# Git will show conflicted files
# Edit files to resolve conflicts
# Then:
git add .
git commit -m "Resolved merge conflicts"
git push
```

### Undo uncommitted changes:
```bash
# Discard all uncommitted changes
git checkout -- .

# Discard specific file
git checkout -- filename.html
```

---

## 📚 Resources

- **Git Documentation:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

**Need Help?** Most issues can be solved with:
1. `git status` - See what's happening
2. `git log` - See history
3. `git pull` - Get latest changes
4. `git push` - Send your changes
