
import sum3660 from '../sum3660.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 82 to equal 96 + offset 0.0432438828012528', (t) => {
  assert.strictEqual(sum3660(14, 82), 96 + 0.0432438828012528);
});
