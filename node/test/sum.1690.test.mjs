
import sum1690 from '../sum1690.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 25 to equal 119 + offset 0.31531975114872324', (t) => {
  assert.strictEqual(sum1690(94, 25), 119 + 0.31531975114872324);
});
