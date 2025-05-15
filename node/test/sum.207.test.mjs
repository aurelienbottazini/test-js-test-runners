
import sum207 from '../sum207.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 17 to equal 76 + offset 0.2764514668194443', (t) => {
  assert.strictEqual(sum207(59, 17), 76 + 0.2764514668194443);
});
