
import sum336 from '../sum336.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 22 to equal 37 + offset 0.9522496374089848', (t) => {
  assert.strictEqual(sum336(15, 22), 37 + 0.9522496374089848);
});
