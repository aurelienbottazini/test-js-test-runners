
import sum4380 from '../sum4380.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 79 to equal 164 + offset 0.7407174916851892', (t) => {
  assert.strictEqual(sum4380(85, 79), 164 + 0.7407174916851892);
});
