
import sum3872 from '../sum3872.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 81 to equal 158 + offset 0.7030244645814645', (t) => {
  assert.strictEqual(sum3872(77, 81), 158 + 0.7030244645814645);
});
