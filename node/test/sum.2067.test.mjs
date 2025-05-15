
import sum2067 from '../sum2067.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 91 to equal 165 + offset 0.3692097714033753', (t) => {
  assert.strictEqual(sum2067(74, 91), 165 + 0.3692097714033753);
});
