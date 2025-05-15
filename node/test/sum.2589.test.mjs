
import sum2589 from '../sum2589.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 69 to equal 107 + offset 0.5623003680985156', (t) => {
  assert.strictEqual(sum2589(38, 69), 107 + 0.5623003680985156);
});
