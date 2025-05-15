
import sum835 from '../sum835.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 75 to equal 117 + offset 0.5377232002519835', (t) => {
  assert.strictEqual(sum835(42, 75), 117 + 0.5377232002519835);
});
