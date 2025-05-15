
import sum4406 from '../sum4406.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 79 to equal 104 + offset 0.8655364920863108', (t) => {
  assert.strictEqual(sum4406(25, 79), 104 + 0.8655364920863108);
});
