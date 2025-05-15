
import sum1848 from '../sum1848.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 51 to equal 66 + offset 0.3989064405197127', (t) => {
  assert.strictEqual(sum1848(15, 51), 66 + 0.3989064405197127);
});
