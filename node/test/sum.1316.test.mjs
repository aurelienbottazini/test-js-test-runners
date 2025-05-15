
import sum1316 from '../sum1316.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 1 to equal 32 + offset 0.4862467307481797', (t) => {
  assert.strictEqual(sum1316(31, 1), 32 + 0.4862467307481797);
});
