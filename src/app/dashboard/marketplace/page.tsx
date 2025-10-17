// app/dashboard/marketing/page.tsx
'use client';

import { JSX, useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FiSearch, FiFilter, FiPlus, FiBookmark, FiEdit2, FiEye } from 'react-icons/fi';

interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'free' | 'primer' | 'basic' | 'premium';
  isBookmarked: boolean;
  previewImage: string;
  size: 'compact' | 'standard' | 'expanded';
  lastEdited: string;
}

const categories = [
  'All Templates',
  'Welcome Series',
  'Promotional',
  'Newsletter',
  'Transactional',
  'Abandoned Cart',
  'Onboarding'
];

const templateTypes = {
  free: { label: 'Free', color: 'bg-success/20 text-success' },
  primer: { label: 'Primer', color: 'bg-primary/20 text-primary' },
  basic: { label: 'Basic', color: 'bg-accent/20 text-accent' },
  premium: { label: 'Premium', color: 'bg-secondary/20 text-secondary' }
};

const sampleTemplates: EmailTemplate[] = [
  {
    id: '1',
    name: 'Welcome Series',
    description: 'Perfect for welcoming new subscribers and setting expectations',
    category: 'Welcome Series',
    type: 'free',
    isBookmarked: true,
    previewImage: '/api/placeholder/300/200',
    size: 'standard',
    lastEdited: '2 hours ago'
  },
  {
    id: '2',
    name: 'Weekly Newsletter',
    description: 'Clean, professional newsletter template with clear CTAs',
    category: 'Newsletter',
    type: 'primer',
    isBookmarked: false,
    previewImage: '/api/placeholder/300/200',
    size: 'expanded',
    lastEdited: '1 day ago'
  },
  {
    id: '3',
    name: 'Flash Sale Announcement',
    description: 'Urgent promotional email for limited-time offers and deals',
    category: 'Promotional',
    type: 'basic',
    isBookmarked: true,
    previewImage: '/api/placeholder/300/200',
    size: 'compact',
    lastEdited: '3 days ago'
  },
  {
    id: '4',
    name: 'Cart Recovery',
    description: 'Recover lost sales with gentle reminder templates',
    category: 'Abandoned Cart',
    type: 'free',
    isBookmarked: false,
    previewImage: '/api/placeholder/300/200',
    size: 'standard',
    lastEdited: '1 week ago'
  },
  {
    id: '5',
    name: 'Product Launch',
    description: 'Build excitement for new product releases and features',
    category: 'Promotional',
    type: 'premium',
    isBookmarked: false,
    previewImage: '/api/placeholder/300/200',
    size: 'expanded',
    lastEdited: '2 weeks ago'
  },
  {
    id: '6',
    name: 'Onboarding Sequence',
    description: '3-part email series for new customer onboarding process',
    category: 'Onboarding',
    type: 'primer',
    isBookmarked: true,
    previewImage: '/api/placeholder/300/200',
    size: 'standard',
    lastEdited: '5 days ago'
  }
];

export default function MarketingPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('All Templates');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarksOnly, setBookmarksOnly] = useState(false);

  const filteredTemplates = sampleTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'All Templates' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBookmarks = !bookmarksOnly || template.isBookmarked;
    
    return matchesCategory && matchesSearch && matchesBookmarks;
  });

  const handleBookmarkToggle = (templateId: string) => {
    // In a real app, you would update this in your state management
    console.log('Toggle bookmark for template:', templateId);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-base-content">
            Email Templates
          </h1>
          <p className="text-lg text-base-content/70">
            Choose from professionally designed email templates
          </p>
        </div>
        
        <button className="btn btn-secondary text-secondary-content font-semibold py-3 px-8 gap-2">
          <FiPlus className="w-5 h-5" />
          New Template
        </button>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row gap-4 p-6 rounded-xl border border-base-300 bg-base-100">
        {/* Search */}
        <div className="flex-1 relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-base-200 border border-base-300 rounded-xl text-base-content placeholder:text-base-content/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3.5 bg-base-200 border border-base-300 rounded-xl text-base-content focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        {/* Bookmarks Toggle */}
        <button
          onClick={() => setBookmarksOnly(!bookmarksOnly)}
          className={`px-6 py-3.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${
            bookmarksOnly 
              ? 'bg-accent/10 border-accent text-accent' 
              : 'bg-base-200 border-base-300 text-base-content/70 hover:text-base-content'
          }`}
        >
          {bookmarksOnly ? <BsFillBookmarkFill className="w-5 h-5" /> : <FiBookmark className="w-5 h-5" />}
          <span>Bookmarks</span>
        </button>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTemplates.map(template => (
          <TemplateCard 
            key={template.id} 
            template={template} 
            onBookmarkToggle={handleBookmarkToggle}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
            <FiSearch className="w-10 h-10 text-base-content/40" />
          </div>
          <h3 className="text-xl font-semibold text-base-content mb-2">
            No templates found
          </h3>
          <p className="text-base-content/70 mb-6">
            Try adjusting your search or filter criteria
          </p>
          <button className="btn btn-primary text-primary-content font-semibold py-3 px-8">
            Create New Template
          </button>
        </div>
      )}
    </div>
  );
}

// Template Card Component
const TemplateCard = ({ 
  template, 
  onBookmarkToggle 
}: { 
  template: EmailTemplate;
  onBookmarkToggle: (id: string) => void;
}) => {
  const typeConfig = templateTypes[template.type];
  const sizeLabels = {
    compact: 'Compact',
    standard: 'Standard', 
    expanded: 'Expanded'
  };

  return (
    <div className="group">
      {/* Template Card */}
      <div className="p-6 rounded-xl border border-base-300 bg-base-100 hover:border-base-content/20 transition-all duration-200 h-full flex flex-col">
        {/* Preview Image */}
        <div className="relative mb-4 rounded-lg overflow-hidden bg-base-200 border border-base-300 flex-shrink-0">
          {/* Email Preview Container */}
          <div className="aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <FiEye className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-base-content/60 text-sm font-medium">
                  {template.name}
                </p>
                <div className="text-xs text-base-content/40">
                  {sizeLabels[template.size]} • {template.category}
                </div>
              </div>
            </div>
          </div>
          
          {/* Type Badge */}
          <div className={`absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-medium ${typeConfig.color}`}>
            {typeConfig.label}
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => onBookmarkToggle(template.id)}
            className={`absolute top-3 right-3 p-2 rounded-lg transition-all duration-200 ${
              template.isBookmarked 
                ? 'bg-accent/20 text-accent' 
                : 'bg-base-200/80 text-base-content/40 hover:text-base-content'
            }`}
          >
            {template.isBookmarked ? (
              <BsFillBookmarkFill className="w-4 h-4" />
            ) : (
              <FiBookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Content - Flex-grow to push actions to bottom */}
        <div className="flex flex-col flex-grow space-y-4">
          {/* Title and Description */}
          <div className="space-y-3 flex-grow">
            <h3 className="font-semibold text-base-content text-lg leading-tight group-hover:text-primary transition-colors">
              {template.name}
            </h3>
            <p className="text-base-content/70 text-sm leading-relaxed">
              {template.description}
            </p>
          </div>

          {/* Meta Info and Actions Container */}
          <div className="space-y-3">
            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-base-content/50 pt-2 border-t border-base-300">
              <span className="font-medium">{template.category}</span>
              <span>{template.lastEdited}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 btn btn-outline py-2.5 gap-2 text-sm">
                <FiEye className="w-4 h-4" />
                View
              </button>
              <button className="flex-1 btn btn-primary py-2.5 gap-2 text-sm text-primary-content">
                <FiEdit2 className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};