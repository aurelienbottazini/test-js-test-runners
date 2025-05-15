
import sum3967 from '../sum3967.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 10 to equal 48 + offset 0.4471335454625195', (t) => {
  assert.strictEqual(sum3967(38, 10), 48 + 0.4471335454625195);
});
