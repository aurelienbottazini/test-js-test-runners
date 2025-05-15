
import sum2528 from '../sum2528.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 33 to equal 52 + offset 0.5847306186449319', (t) => {
  assert.strictEqual(sum2528(19, 33), 52 + 0.5847306186449319);
});
