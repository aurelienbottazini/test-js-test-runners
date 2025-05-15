
import sum1751 from '../sum1751.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 54 to equal 147 + offset 0.8959855444895675', (t) => {
  assert.strictEqual(sum1751(93, 54), 147 + 0.8959855444895675);
});
