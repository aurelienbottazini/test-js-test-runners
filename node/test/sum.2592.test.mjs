
import sum2592 from '../sum2592.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 79 to equal 122 + offset 0.042355262228599866', (t) => {
  assert.strictEqual(sum2592(43, 79), 122 + 0.042355262228599866);
});
