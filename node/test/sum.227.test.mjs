
import sum227 from '../sum227.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 86 to equal 110 + offset 0.1956692711628064', (t) => {
  assert.strictEqual(sum227(24, 86), 110 + 0.1956692711628064);
});
