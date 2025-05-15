
import sum4854 from '../sum4854.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 12 to equal 97 + offset 0.1450491997331096', (t) => {
  assert.strictEqual(sum4854(85, 12), 97 + 0.1450491997331096);
});
