
import sum3498 from '../sum3498.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 42 to equal 117 + offset 0.2880127291574561', (t) => {
  assert.strictEqual(sum3498(75, 42), 117 + 0.2880127291574561);
});
