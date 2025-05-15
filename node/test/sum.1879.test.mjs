
import sum1879 from '../sum1879.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 2 to equal 84 + offset 0.3770037538974339', (t) => {
  assert.strictEqual(sum1879(82, 2), 84 + 0.3770037538974339);
});
