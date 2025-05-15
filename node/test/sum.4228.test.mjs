
import sum4228 from '../sum4228.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 55 to equal 58 + offset 0.43016766528537353', (t) => {
  assert.strictEqual(sum4228(3, 55), 58 + 0.43016766528537353);
});
