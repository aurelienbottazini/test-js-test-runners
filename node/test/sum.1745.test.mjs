
import sum1745 from '../sum1745.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 72 to equal 85 + offset 0.40136146498577885', (t) => {
  assert.strictEqual(sum1745(13, 72), 85 + 0.40136146498577885);
});
