
import sum2536 from '../sum2536.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 85 to equal 180 + offset 0.34264546380544847', (t) => {
  assert.strictEqual(sum2536(95, 85), 180 + 0.34264546380544847);
});
