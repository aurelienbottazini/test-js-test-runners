
import sum704 from '../sum704.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 93 to equal 170 + offset 0.07071199643144577', (t) => {
  assert.strictEqual(sum704(77, 93), 170 + 0.07071199643144577);
});
