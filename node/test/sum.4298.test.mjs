
import sum4298 from '../sum4298.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 32 to equal 67 + offset 0.6156757561864121', (t) => {
  assert.strictEqual(sum4298(35, 32), 67 + 0.6156757561864121);
});
