
import sum4671 from '../sum4671.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 47 to equal 68 + offset 0.3285490392267514', (t) => {
  assert.strictEqual(sum4671(21, 47), 68 + 0.3285490392267514);
});
