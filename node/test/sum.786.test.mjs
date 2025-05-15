
import sum786 from '../sum786.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 29 to equal 85 + offset 0.3427627774014744', (t) => {
  assert.strictEqual(sum786(56, 29), 85 + 0.3427627774014744);
});
