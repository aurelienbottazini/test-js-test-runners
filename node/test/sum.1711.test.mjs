
import sum1711 from '../sum1711.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 27 to equal 65 + offset 0.7266200321816935', (t) => {
  assert.strictEqual(sum1711(38, 27), 65 + 0.7266200321816935);
});
