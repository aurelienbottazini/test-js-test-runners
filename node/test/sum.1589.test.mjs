
import sum1589 from '../sum1589.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 22 to equal 57 + offset 0.4184912481363402', (t) => {
  assert.strictEqual(sum1589(35, 22), 57 + 0.4184912481363402);
});
