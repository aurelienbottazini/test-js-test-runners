
import sum2055 from '../sum2055.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 41 to equal 89 + offset 0.3134081675334507', (t) => {
  assert.strictEqual(sum2055(48, 41), 89 + 0.3134081675334507);
});
