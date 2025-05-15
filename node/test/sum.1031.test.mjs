
import sum1031 from '../sum1031.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 59 to equal 70 + offset 0.5313763631457036', (t) => {
  assert.strictEqual(sum1031(11, 59), 70 + 0.5313763631457036);
});
