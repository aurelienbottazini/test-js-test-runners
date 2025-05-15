
import sum4000 from '../sum4000.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 91 to equal 120 + offset 0.34212505164233253', (t) => {
  assert.strictEqual(sum4000(29, 91), 120 + 0.34212505164233253);
});
