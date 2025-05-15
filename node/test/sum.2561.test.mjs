
import sum2561 from '../sum2561.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 98 to equal 126 + offset 0.5561179206344056', (t) => {
  assert.strictEqual(sum2561(28, 98), 126 + 0.5561179206344056);
});
