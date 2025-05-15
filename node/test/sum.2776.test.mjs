
import sum2776 from '../sum2776.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 99 to equal 135 + offset 0.23274965293870276', (t) => {
  assert.strictEqual(sum2776(36, 99), 135 + 0.23274965293870276);
});
