
import sum836 from '../sum836.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 90 to equal 169 + offset 0.3506039922820059', (t) => {
  assert.strictEqual(sum836(79, 90), 169 + 0.3506039922820059);
});
