
import sum354 from '../sum354.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 12 to equal 69 + offset 0.37615547524048953', (t) => {
  assert.strictEqual(sum354(57, 12), 69 + 0.37615547524048953);
});
