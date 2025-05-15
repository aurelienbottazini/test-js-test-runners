
import sum3311 from '../sum3311.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 68 to equal 113 + offset 0.4362550581107716', (t) => {
  assert.strictEqual(sum3311(45, 68), 113 + 0.4362550581107716);
});
