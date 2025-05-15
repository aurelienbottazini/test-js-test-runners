
import sum3822 from '../sum3822.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 93 to equal 110 + offset 0.4937748488108079', (t) => {
  assert.strictEqual(sum3822(17, 93), 110 + 0.4937748488108079);
});
