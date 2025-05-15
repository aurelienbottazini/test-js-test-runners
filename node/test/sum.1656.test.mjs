
import sum1656 from '../sum1656.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 60 to equal 142 + offset 0.10600880678242874', (t) => {
  assert.strictEqual(sum1656(82, 60), 142 + 0.10600880678242874);
});
