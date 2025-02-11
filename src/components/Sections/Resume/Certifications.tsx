import {FC, memo} from 'react';
import {Certifications as CertificationType} from '../../../data/dataDef';

export const CertificationItem: FC<{certification: CertificationType}> = memo(({certification}) => {
  const {name, issuedBy, image, verificationUrl} = certification;
  return (
    <div className="flex items-center gap-4">
      <a
        className="flex items-center gap-4 hover:bg-neutral-200 p-2 rounded-lg transition-colors"
        href={verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt={name} className="h-16 w-16" src={image} />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-neutral-800">{name}</span>
          <span className="text-xs text-neutral-500">{issuedBy}</span>
        </div>
      </a>
    </div>
  );
});

CertificationItem.displayName = 'CertificationItem';

export const CertificationGroup: FC<{certifications: CertificationType[]}> = memo(({certifications}) => {
  return (
    <div className="flex flex-col gap-4">
      {certifications.map((certification, index) => (
        <CertificationItem 
          key={`${certification.name}-${index}`}
          certification={certification}
        />
      ))}
    </div>
  );
});

CertificationGroup.displayName = 'CertificationGroup';