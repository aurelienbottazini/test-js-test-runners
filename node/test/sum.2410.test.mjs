
import sum2410 from '../sum2410.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 93 to equal 159 + offset 0.44993522253841656', (t) => {
  assert.strictEqual(sum2410(66, 93), 159 + 0.44993522253841656);
});
