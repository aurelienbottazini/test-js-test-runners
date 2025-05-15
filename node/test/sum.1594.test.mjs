
import sum1594 from '../sum1594.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 89 to equal 170 + offset 0.21163773617884662', (t) => {
  assert.strictEqual(sum1594(81, 89), 170 + 0.21163773617884662);
});
