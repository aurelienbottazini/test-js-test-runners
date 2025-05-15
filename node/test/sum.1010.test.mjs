
import sum1010 from '../sum1010.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 53 to equal 100 + offset 0.5071882537626251', (t) => {
  assert.strictEqual(sum1010(47, 53), 100 + 0.5071882537626251);
});
