
import sum1723 from '../sum1723.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 22 to equal 37 + offset 0.19535352298909736', (t) => {
  assert.strictEqual(sum1723(15, 22), 37 + 0.19535352298909736);
});
