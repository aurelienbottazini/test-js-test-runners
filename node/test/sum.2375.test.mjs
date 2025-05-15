
import sum2375 from '../sum2375.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 50 to equal 89 + offset 0.47816987301610514', (t) => {
  assert.strictEqual(sum2375(39, 50), 89 + 0.47816987301610514);
});
